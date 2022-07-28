import PropTypes from 'prop-types';
import { expandTitle } from '@Helpers/title.js';

const Title = ({ title = "Welcome" }) => {
	const betterTitle = expandTitle(title);
	
	return <h1>{betterTitle}</h1>;
}

Title.propTypes = {
	title: PropTypes.string,
}

export default Title;