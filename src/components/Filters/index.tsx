import React, { useState, useEffect } from 'react';
import { FiltersWrapper } from "./styles";

interface FiltersProps {
    sets: string[];
    types: string[];
    setFilterSet: React.Dispatch<React.SetStateAction<string>>;
    setFilterType: React.Dispatch<React.SetStateAction<string>>;
  }

const Filters: React.FC<FiltersProps> = ({ sets, types, setFilterSet, setFilterType }) => {
    const [selectedFilter, setSelectedFilter] = useState<string>("");
    const selected = (s: string) => s === selectedFilter ? true : false;
    const handleSelection = (s: string, t: string, e: string) => {
      setFilterSet(s);
      setFilterType(t);
      setSelectedFilter(e)
    }

    useEffect(() => {
      handleSelection("All", "All", "All");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <FiltersWrapper>
        <h3>Filters</h3>
        <h5>Expansions:</h5>
        {sets.map(e => <div key={e} className={`filteroption ${selected(e) ? "selected" : "" }`} onClick={() => handleSelection(e, "All", e)}>{e}</div>)}
        <h5>Product:</h5>
        {types.map(e => <div key={e} className={`filteroption ${selected(e) ? "selected" : "" }`} onClick={() => handleSelection("All", e, e)}>{e}</div>)}
      </FiltersWrapper>
    );
  };
  
  export default Filters;