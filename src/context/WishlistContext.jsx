import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {

  // Load Data From LocalStorage
  const [wishlist, setWishlist] = useState(() => {

    const savedWishlist =
      localStorage.getItem("wishlist");

    return savedWishlist
      ? JSON.parse(savedWishlist)
      : [];
  });

  // Save To LocalStorage
  useEffect(() => {

    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );

  }, [wishlist]);

  // Add / Remove Wishlist
  const toggleWishlist = (property) => {

    const exists = wishlist.find(
      (item) => item.id === property.id
    );

    if (exists) {

      setWishlist(
        wishlist.filter(
          (item) => item.id !== property.id
        )
      );

    } else {

      setWishlist([
        ...wishlist,
        property,
      ]);

    }
  };

  // Check Exists
  const isInWishlist = (id) => {

    return wishlist.some(
      (item) => item.id === id
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}