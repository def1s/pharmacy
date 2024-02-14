import './styles/index.scss';
import { Link } from 'react-router-dom';
import AppRouter from 'app/providers/router/ui/AppRouter';
import { classNames } from 'shared/lib/classNames/classNames';

const App = () => {
	return (
		<div className={classNames('app')}>
			<div className="content">
				<Link to={'/'}>Main</Link>
				<Link to={'/medicine-catalog'}>To catalog</Link>
				<Link to={'/medicine-catalog/3'}>To category</Link>
				<AppRouter/>
			</div>
		</div>
	);
};

export default App;
