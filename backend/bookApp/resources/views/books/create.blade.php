<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-green-500 leading-tight flex justify-center items-center">
            {{ __('Add Books') }}
        </h2>
    </x-slot>

    @if(session('success'))
    <div style="width: 50%; margin: 0 auto; padding: 10px; background-color: #4CAF50; color: white; text-align: center;" class="alert alert-success mt-3">
        {{ session('success') }}
    </div>
    @endif

    <div class="py-12 flex items-center jutify-center">
        <div class="max-w-xl w-full mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900">
                    <form method="post" action="{{ route('books.store') }}" enctype="multipart/form-data">
                        @csrf
                        <x-input-label for="title" class="mt-1 text-gray-700 font-bold text-lg">Title:</x-input-label>
                        <x-text-input id="title" class="block mt-2" type="text" name="title"/>
                        <x-input-label for="author" class="mt-2 text-gray-700 font-bold text-lg">Author:</x-input-label>
                        <x-text-input id="author" class="block mt-1 " type="text" name="author"/>
                        <x-input-label for="description" class="mt-2 text-gray-700 font-bold text-lg">Description:</x-input-label>
                        <x-text-input id="description" class="block mt-1 " type="text" name="description"/>
                        <x-input-label for="price" class="mt-2 text-gray-700 font-bold text-lg">Price:</x-input-label>
                        <x-text-input id="price" class="block mt-1 " type="text" name="price"/>
                        <x-input-label for="quantity" class="mt-2 text-gray-700 font-bold text-lg">Quantity:</x-input-label>
                        <x-text-input id="quantity" class="block mt-1 " type="text" name="quantity"/>
                        <x-input-label for="category" class="mt-2 text-gray-700 font-bold text-lg">Category:</x-input-label>
                        <x-text-input id="category" class="block mt-1 " type="text" name="category"/>
                        <x-input-label for="image" class="mt-2 text-gray-700 font-bold text-lg">Book Cover:</x-input-label>
                        <input id="image" type="file" name="image" class="block mt-1">

        
                        <x-primary-button type="submit" class="ms-3 mt-4 bg-sky-500 text-white font-bold hover:bg-blue-700">Add Book</x-primary-button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>

