import React, { useState, useCallback, createContext } from 'react';

const Context = createContext();

export function DropdownProvider({children}) {
  const [options, setOptions] = useState([]);
  const [targedId, setTargedId] = useState(null);
  const [cachedId , setCachedId] = useState(null);

  const registerOption = useCallback(({
    id,
    optionDimensions,
    optionCenterX,
    WrappedContent,
    backgroundHeight
  }) => {
    setOptions(items => [
      ...items,
      {
        id,
        optionDimensions,
        optionCenterX,
        WrappedContent,
        backgroundHeight
      }
    ])
  }, [setOptions])

  const updateOptionProps = useCallback(() => {}, [setOptions])
  
  
  return (
    <Context.Provider 
      value={{

      }}
    >
      {children}
    </Context.Provider>
  );
}
