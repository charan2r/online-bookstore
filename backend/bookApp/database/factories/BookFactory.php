<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence,
            'author' => $this->faker->name,
            'price' => $this->faker->randomFloat(1500, 750, 1000),
            'category' => $this->faker->randomElement(['Fiction', 'Translation', 'Education', 'Novels','Short Stories']),
            'description' => $this->faker->paragraph,
            'quantity'=> $this->faker->randomFloat(10, 70, 100),
            'image' => '1715184743.jpg',

        ];
    }
}
