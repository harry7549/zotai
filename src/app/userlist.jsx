import { useAtom } from "jotai";
import { DataAtom, filterAtom } from "./atom";
import { Suspense } from "react";

const UsersList = () => {
  const [data] = useAtom(DataAtom);
  // console.log(data);

  const [filter, setFilter] = useAtom(filterAtom);
  // console.log(filter);
  return (
    <>
      <h3>Users</h3>

      <Suspense fallback="loading...">
        <h5>{filter}</h5>
      </Suspense>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {data
        .filter((e) => e.name.toLowerCase().includes(filter.toLowerCase()))
        .map((elem) => {
          return <h5 key={elem.id}>{elem.name}</h5>;
        })}
    </>
  );
};

export default UsersList;
