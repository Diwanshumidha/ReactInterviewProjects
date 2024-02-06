import useQuery from "./useFetch";
type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

type ProductListResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

const FetchComponent = () => {
  const {
    data: Products,
    error,
    isError,
    isLoading,
    refetch,
  } = useQuery<ProductListResponse>({
    url: "https://dummyjson.com/products",
  });

  if (isLoading) {
    return <div className="use-fetch__wrapper">loading...</div>;
  }

  if (isError) {
    return <div className="use-fetch__wrapper">{error}</div>;
  }

  return (
    <div className=" use-fetch__wrapper">
      <button onClick={() => refetch()}>Re-fetch</button>
      {Products?.products?.map((item) => {
        return <p>{item.title}</p>;
      })}
    </div>
  );
};

export default FetchComponent;
