type Props = {
  params: { id: number };
};

export default async function User({ params: { id } }: Props) {
  console.log(id);
  return <div>User {id}</div>;
}
