import Router from 'next/router';

const withAuthAdmin = (WrappedComponent) => {
  return (props) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== 'undefined') {
      const accessToken = sessionStorage.getItem('nanoid');

      // If there is no access token we redirect to "/" page.
      if (!accessToken) {
        Router.push('/', null, { shallow: true });
        return null;
      }

      // If this is an accessToken we just render the component that was passed with all its props

      return <WrappedComponent {...props} />;
    }

    // If we are on server, return null
    return null;
  };
};
export default withAuthAdmin;
