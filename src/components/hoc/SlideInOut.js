import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { LOCATIONS } from "../../App";

const getLocationIndex = path =>
  LOCATIONS.findIndex(location => location.path === path);

const SlideInOut = props => {
  const [currentPage, setCurrentPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [isAscending, setIsAscending] = useState(true);
  const [currentPathname, setCurrentPathname] = useState();
  const [transitioning, setTransitioning] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    const prevLocationIndex = getLocationIndex(currentPathname);
    const newLocationIndex = getLocationIndex(props.pathname);

    setIsAscending(prevLocationIndex > newLocationIndex);
    setCurrentPathname(props.pathname);
    setPrevPage(currentPage);
    setCurrentPage(props.children);
    !isFirstRender && setTransitioning(true);
  }, [props.pathname]);

  const animateEntry = useSpring({
    transform: `translateY(${transitioning ? (isAscending ? -100 : 100) : 0}%)`,
    opacity: transitioning ? 0 : 1
  });

  const animateExit = useSpring({
    transform: `translateY(${transitioning ? (isAscending ? 100 : -100) : 0}%)`,
    opacity: transitioning ? 0 : 1,
    onRest: () => {
      setTransitioning(false);
      setPrevPage(null);
    }
  });

  const animateFadeInOnMount = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    onRest: () => {
      setIsFirstRender(false);
    }
  });

  return (
    <React.Fragment>
      <animated.div
        style={
          isFirstRender
            ? animateFadeInOnMount
            : prevPage
            ? animateExit
            : animateEntry
        }
      >
        {prevPage || currentPage}
      </animated.div>
    </React.Fragment>
  );
};

export default SlideInOut;
