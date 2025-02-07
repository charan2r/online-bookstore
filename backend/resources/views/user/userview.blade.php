<!-- resources/views/admin/user-list.blade.php -->
<x-app-layout>
    <x-slot name="header">
        <h2 class="font-bold text-center text-xl text-gray-800 leading-tight">{{ __('Manage Users') }}</h2>
    </x-slot>

    <div class="py-6">
        <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                <table class="table-auto w-full">
                    <thead>
                        <tr>
                            <th class="bg-gray-100 border-b px-10 py-1">Name</th>
                            <th class="bg-gray-100 border-b px-10 py-1">Email</th>
                            <th class="bg-gray-100 border-b px-10 py-1">Role</th>
                            <th class="bg-gray-100 border-b px-10 py-1">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="space-y-4">
                        @foreach ($users as $user)
                        <tr class="bg-white shadow-sm border-b-2">
                            <td class="px-10 py-3">{{ $user->name }}</td>
                            <td class="px-10 py-1">{{ $user->email }}</td>
                            <td class="px-10 py-1">
                                @if($user->usertype === 'admin')
                                    Admin
                                @else
                                    User
                                @endif
                            </td>
                            <td class="flex justify-center items-center space-x-4 px-3 py-2">
                                <a href="{{ route('admin.users.edit', $user->id) }}" class="bg-blue-500 text-white px-5 py-1 rounded hover:bg-blue-600 transition">
                                View</a>
                                <form action="{{ route('admin.users.destroy', $user->id) }}" method="POST" class="inline"
                                    onsubmit="return confirm('Are you sure you want to delete this user?');" >
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="bg-red-500 text-white px-5 py-1 rounded hover:bg-red-600 transition flex space-x-4">
                                        Delete
                                    </button>
                                </form>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</x-app-layout>
