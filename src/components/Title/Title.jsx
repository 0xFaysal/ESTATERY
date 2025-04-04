import { Helmet } from "react-helmet";
import fabicon from "/Frame.svg";
import { PropTypes } from "prop-types";

function Title({ location }) {
    return (
        <Helmet>
            <title>{`ESTATERY | ${location ? location : ""}`}</title>
            <link rel='shortcut icon' href={fabicon} type='image/x-icon' />
        </Helmet>
    );
}

export default Title;

Title.propTypes = {
    location: PropTypes.string,
};
