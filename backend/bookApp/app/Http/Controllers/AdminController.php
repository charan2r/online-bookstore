<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Book;
use Illuminate\Http\RedirectResponse;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;

class AdminController extends Controller
{
    //Admin dashboard with book index
    public function dashboard(): Factory|View
    {
        $books = Book::all();
        return view(view: 'admin.dashboard', data: compact(var_name: 'books'));
    }

    //Admin edit books
    public function edit(Book $book): Factory|View
    {
        return view(view: 'books.edit', data: compact(var_name: 'book'));
    }

    //Admin update books
    public function update(Request $request, Book $book): RedirectResponse
    {
        $request->validate(rules: [
            'title' => 'required|string|max:255',
            'author' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'quantity' => 'required|integer|min:0',
            'category' => 'required|string|max:255',
        ]);

        $book->update(attributes: $request->all());

        return redirect(to: 'admin/dashboard')->with(key: 'success', value: 'Book Updated Successfully.');
    }


    //Admin delete books
    public function destroy(Book $book): RedirectResponse
    {
        $book->delete();

        return redirect(to: 'admin/dashboard')->with(key: 'success', value: 'Book Deleted Successfully.');
    }

    //Admin search books
    public function index(Request $request): Factory|View
    {
        $query = Book::query();

        if ($request->has(key: 'search') && !empty($request->search)) {
            $query->where(column: 'title', operator: 'like', value: '%'.$request->search.'%')
                  ->orWhere(column: 'author', operator: 'like', value: '%'.$request->search.'%')
                  ->orWhere(column: 'category', operator: 'like', value: '%'.$request->search.'%');
        }

        $books = $query->get();

        return view(view: 'admin.dashboard', data: compact(var_name: 'books'));
    }
}
