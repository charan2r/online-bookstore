<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Admin Dashboard') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900">
                    {{ __("You're logged in!") }}
                </div>
            </div>
        </div>
    </div>

    @if(session('success'))
    <div style="width: 50%; margin: 0 auto; padding: 10px; background-color: #4CAF50; color: white; text-align: center;" class="alert alert-success mt-3">
        {{ session('success') }}
    </div>
    @endif

    <div class="py-4">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6">
                    <h1 class="text-2xl font-bold mb-4">Books</h1><br>
                    <form action="" method="GET">
                        <div>
                            <input type="text" id="search" name="search" value="{{ request('search') }}">
                        </div>
                        <x-primary-button type="submit" class="ms-3 mt-4 bg-purple-500 text-white font-bold ">Search</x-primary-button>
                    </form>
                    <br>
                    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        @foreach ($books as $book)
                            <div class="bg-white shadow-md p-4 rounded-lg">
                                <img src="{{ asset('images/' . $book->image) }}" alt="{{ $book->title }}" class="w-full h-auto object-cover mb-4">
                                <h2 class="text-lg font-semibold">{{ $book->title }}</h2>
                                <p class="text-gray-700">{{ $book->author }}</p>
                                <p class="mt-2 text-gray-600">{{ $book->description }}</p>
                                <p class="mt-2 text-gray-700">Price: {{ $book->price }}</p>
                                <p class="mt-2 text-gray-700">Quantity: {{ $book->quantity }}</p>
                                <p class="mt-2 text-gray-700">Category: {{ $book->category }}</p>
                                <div class="mt-4 flex justify-between">
                                    <a href="{{ route('admin.books.edit', $book->id) }}" class="text-blue-500 font-bold hover:bg-green-700">Edit</a>
                                    <form action="{{ route('admin.books.destroy', $book->id) }}" method="post" class="inline">
                                        @csrf
                                        @method('DELETE')
                                        <x-primary-button type="submit" class="bg-red-500 text-white font-bold hover:bg-blue-700">Delete</x-primary-button>
                                    </form>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>