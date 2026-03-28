# fitboost

Demo frontendowa aplikacja sklepu z koszykiem (opcode:
`document.addEventListener('DOMContentLoaded', ...)`).

## Pliki

- `index.html` - lista produktów, koszyk i podstawowy layout.
- `cart.js` - logika dodawania / usuwania produktów i obliczania sumy.

## Uruchomienie

1. Otwórz `index.html` w przeglądarce.
2. Kliknij przycisk `Dodaj do koszyka` przy dowolnym produkcie.
3. Koszyk (lista, licznik, suma) aktualizuje się automatycznie.
4. Kliknij `Wyczyść koszyk`, aby wyzerować koszyk.

## Co robi kod

- Słucha `DOMContentLoaded`.
- wskazuje elementy DOM: `#cart-count`, `#cart-items`, `#total`, `.product button`, `#clear-cart-button`.
- przechowuje koszyk w tablicy `cart`.
- renderuje pozycje i sumę w funkcji `updateCartDisplay()`.
- dodaje produkty do koszyka za pomocą `data-product-name` i `data-product-price`.
- obsługuje wyczyść koszyk.

## Weryfikacja

- Produkt wyświetla się na liście.
- `cart-count` to liczba pozycji.
- `total` to suma (w zł, dwie cyfry po przecinku).
- przy pustym koszyku widoczny tekst "Koszyk jest pusty." i przycisk ukryty.

