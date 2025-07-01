# Goldbach's Pairs Decomposition Tool

This website allows you to decompose any even number **N ≤ 10⁵⁰⁰⁰** into a pair of prime numbers (p, q) such that **p + q = N**, as stated in **Goldbach's strong conjecture**.

## 🔍 Purpose

This tool is based on the hybrid GPS-method designed to provide a simple and efficient way to explore Goldbach pairs for very large even numbers. It is intended for mathematicians, students, and curious minds interested in prime number theory.

## 🛠 How to Use

1. Open the website.
2. Enter an even number **greater than or equal to 4**.
3. Click "Decompose".
4. If a valid pair is found, the tool will display primes (p, q) such that `p + q = N`.

⚠️ For very large values of N, the method will give partial results or limit its search to the first million primes.

## 🚀 Features

- Fast decomposition for small and medium even numbers.
- Elegant user interface.
- Runs entirely in your browser.
- Based on pure JavaScript — no server or backend required.

## 📁 Project Structure

```bash
📦goldbach-decomposer
 ┣ 📄 index.html     # Main HTML file
 ┣ 📄 style.css      # Styling (responsive and clean)
 ┣ 📄 script.js      # JavaScript logic for decomposition
 ┗ 📄 README.md      # This file
