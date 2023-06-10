import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(): Promise<Post[]> {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10&_page=0",

    // This request should be cached until manually invalidated.
    // Similar to `getStaticProps`.
    // `force-cache` is the default and can be omitted.
    { cache: "force-cache" }

    // This request should be refetched on every request.
    // Similar to `getServerSideProps`.
    // { cache: 'no-store' }

    // This request should be cached with a lifetime of 10 seconds.
    // Similar to `getStaticProps` with the `revalidate` option.
    // { next: { revalidate: 10 } }
  );
  return response.json();
}

export { fetchPosts };
