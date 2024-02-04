import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-J8PTKDNV6F'); // Replace with your tracking ID
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};