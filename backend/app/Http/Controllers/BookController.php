<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\JsonResponse;

class BookController extends Controller
{
    // fucntion for sending data for the home page
    public function showBooks(): JsonResponse{
        $books = Book::select('id', 'title', 'author', 'price', 'category', 'image')->get();
         // Map over the books collection to include base64 encoded image data
         $books = $books->map(callback: function (Book $book): Book {
            $imagePath = public_path(path: 'images/'. $book->image);
            $nullImagePath = public_path(path: 'images/no_image.png');
            
            if (file_exists(filename: $imagePath)) {
                $book->image_data = base64_encode(string: file_get_contents(filename: $imagePath));
            
            } else {
                $book->image_data = 'null';
            }
            return $book;
        });
        //remove unnessesary data points form the response
        $books->makeHidden(attributes: ['image']);
        return response()->json(data: [
            'data' => $books
        ], status: 200);
    }

    //function for sending book information
    public function getBookInfo($id): JsonResponse{
        $book = Book::findOrFail(id: $id);
        
        //image encode
        $image = public_path(path: 'images/'. $book->image);
        if (file_exists(filename: $image)) {
            $book->image_data = base64_encode(string: file_get_contents(filename: $image));
        } else {
            $book->image_data = "null";
        }

       //check stock availablitiy
        if ($book->quantity > 0){
            $book->isInStock = true;
        }else {
            $book->isInStock = false;
        }
        //remove unnessesary data points form the response
        $book->makeHidden(attributes: ['created_at', 'updated_at', 'quantity','image']);

        return response()->json(data: [
            'data' => $book
        ], status: 200);
    }
    
    //search for the books
    public function searchBooks(Request $request): JsonResponse {
        $search = $request->input('search');
      
        $results = Book::where(column: 'title', operator: 'like', value: "%$search%")->get();
        $results = $results->map(callback: function (Book $book): Book {
            $imagePath = public_path(path: 'images/'. $book->image);
            $nullImagePath = public_path(path: 'images/no_image.png');
            
            if (file_exists(filename: $imagePath)) {
                $book->image_data = base64_encode(string: file_get_contents(filename: $imagePath));
            
            } else {
                $book->image_data = 'null';
            }
            return $book;
        });
        $results->makeHidden(attributes: ['created_at', 'updated_at', 'quantity','image']);
        return response()->json(data: [
            'data' => $results
        ], status: 200);
    }

    //Admin add books
    public function create(): Factory|View{
        return view(view: "books.create");
    }

    //Admin store books
    public function store(Request $request):RedirectResponse{
        $request->validate(rules: [
            'title' => 'required|string|max:255',
            'author' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'quantity' => 'required|integer|min:0',
            'category' => 'required|string|max:255',
            'image' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        if ($request->hasFile(key: 'image')) {
            $imageName = time().'.'.$request->image->extension();
            $request->image->move(public_path(path: 'images'), $imageName); 
        }

        Book::create(attributes: [
            'title' => $request->title,
            'author' => $request->author,
            'description' => $request->description,
            'price' => $request->price,
            'quantity' => $request->quantity,
            'category' => $request->category,
            'image' => $imageName,
        ]);
        return redirect(to: 'admin/dashboard')->with(key: 'success',value: 'Book Added Successfully');
    }
}
