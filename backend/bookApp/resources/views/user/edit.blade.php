<x-app-layout>
    <x-slot name="header">
        <h2 class="font-bold text-center text-xl text-gray-800 leading-tight">
            {{ __('View User') }}
        </h2>
    </x-slot>

    @if(session('success'))
        <div style="width: 50%; margin: 0 auto; padding: 10px; background-color: #4CAF50; color: white; text-align: center;" class="alert alert-success mt-3">
            {{ session('success') }}
        </div>
    @endif

    {{-- Form to edit user details --}}
    <div class="py-5">
        <div class="max-w-3xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-6">
                <form action="{{ route('admin.users.update', $user->id) }}" method="POST">
                    @csrf  {{-- CSRF protection --}}
                    @method('PUT')  {{-- Use PUT for updating resources --}}

                    {{-- User name input field --}}
                    <div class="mb-4">
                        <label for="name" class="block text-gray-700">Name:</label>
                        <input type="text" name="name" value="{{ $user->name }}" class="w-full border rounded p-2" required>
                    </div>

                    {{-- User email input field --}}
                    <div class="mb-4">
                        <label for="email" class="block text-gray-700">Email:</label>
                        <input type="email" name="email" value="{{ $user->email }}" class="w-full border rounded p-2" required>
                    </div>

                    {{-- Submit button to update the  user details --}}
                    <div class="text-right">
                        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                            Update User 
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</x-app-layout>
