import BasicLayout from "@components/Layout/BasicLayout";
import { ReactElement, useMemo, useState } from "react";
import moves from "../data/pokemonMoves.json";
import { useDebounce } from "react-use";

const PokemonMoves = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const mons = useMemo(() => moves.map((item) => item.name).sort(), []);

  const moveList = useMemo(() => {
    if (!selected) return [];
    const moveSet = moves.find((item) => item.name === selected);
    if (!moveSet) return [];
    return [...new Set(moveSet.moves)].sort();
  }, [selected]);

  return (
    <div className="w-full flex flex-col items-center  h-full  min-h-screen text-black bg-white space-y-6 py-8">
      <select
        value={selected || ""}
        onChange={(e) => setSelected(e.target.value)}
        className="w-4/5 border rounded capitalize px-2 py-1"
      >
        {mons.map((mon) => (
          <option className="capitalize" key={mon} label={mon} value={mon} />
        ))}
      </select>

      <ul className="w-4/5 flex flex-col items-start">
        {moveList?.map((item) => (
          <li className="capitalize">{item}</li>
        ))}
      </ul>
    </div>
  );
};

PokemonMoves.layout = (page: ReactElement) => <BasicLayout>{page}</BasicLayout>;

export default PokemonMoves;
