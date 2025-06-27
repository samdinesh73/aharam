import PropTypes from "prop-types";
import * as Icon from "@phosphor-icons/react/dist/ssr"

export default function Rate({ currentRate, style }) {
  let arrOfStar = [];
  for (let i = 0; i < 5; i++) {
    if (i >= currentRate) {
      arrOfStar.push(<Icon.Star key={i} className={style} />);
    } else {
      arrOfStar.push(<Icon.Star key={i} weight="fill" className={style} />);
    }
  }
  return <div className="rate">{arrOfStar}</div>;
}

Rate.propTypes = {
  currentRate: PropTypes.number,
};
