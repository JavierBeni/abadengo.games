import React, { useState } from 'react';
import { FiltersWrapper } from "./styles";
import { useTranslation } from 'react-i18next';

interface FiltersProps {
    games?: string[];
    sets: string[];
    types: string[];
    setFilterGame?: React.Dispatch<React.SetStateAction<string>>;
    setFilterSet: React.Dispatch<React.SetStateAction<string>>;
    setFilterType: React.Dispatch<React.SetStateAction<string>>;
  }

const Filters: React.FC<FiltersProps> = ({ games, sets, types, setFilterGame, setFilterSet, setFilterType }) => {
    const [selectedFilter, setSelectedFilter] = useState<string>("");
    const { t } = useTranslation();
    const selected = (s: string) => s === selectedFilter ? true : false;
    return (
      <FiltersWrapper>
        <h3>Filters</h3>
        {games && (
          <>
            <h5>Games:</h5>
            {games.map(e => <div key={e} className={`filteroption ${selected(e) ? "selected" : "" }`} onClick={() => {setFilterGame?.(e); setFilterSet("All"); setFilterType("All"); setSelectedFilter(e)}}>{t(e)}</div>)}
          </>
        )}
        <h5>Expansions:</h5>
        {sets.map(e => <div key={e} className={`filteroption ${selected(e) ? "selected" : "" }`} onClick={() => {setFilterSet(e); setFilterGame?.("All"); setFilterType("All"); setSelectedFilter(e)}}>{e}</div>)}
        <h5>Product:</h5>
        {types.map(e => <div key={e} className={`filteroption ${selected(e) ? "selected" : "" }`} onClick={() => {setFilterType(e); setFilterGame?.("All"); setFilterSet("All"); setSelectedFilter(e)}}>{e}</div>)}
      </FiltersWrapper>
    );
  };

  export default Filters;
