/* eslint-disable react/prop-types */
import {
  createContext, useContext, useState, useMemo,
} from 'react';
import PropTypes from 'prop-types';

/**
 * Default store
 */
const defaultStore = {
  closeHeaderHandler: null,
};

/**
 * Step1: Create context
 */
export const AppContext = createContext();

/**
 * Step2: Wrap component
 */
export const CxtProvider = ({
  children,
}) => {
  const [store, setStore] = useState(defaultStore);
  // setStore, depends on store change.
  const value = useMemo(() => ({
    store, setStore,
  }), [store]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

CxtProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Step3: Call useContext to use data
 * customized hooks
 */
export const useAppContext = () => {
  const cxt = useContext(AppContext);
  return [cxt.store, cxt.setStore];
};

// step1
// const AContext = createContext();

// const Aa = ({
//   cc,
// }) => <div><B cc={cc} /></div>;

// const A = ({
//   cc,
// }) => <div><B cc={cc} /></div>;

// const B = () => {
//   // step3
//   // useContext can get all values wrapped by AContext.Provider. Global variable.
//   const store = useContext(AContext);
//   return <div onClick={() => store.setCC('dd')}>{store.cc}</div>; // click to change cc
// };

// const C = () => {
//   const [cc, setCC] = useState();
//   // step2
//   return <AContext.Provider value={{ cc, setCC }}><div>
//     <Aa />
//     <A cc={cc} /></div></AContext.Provider>;
// };
