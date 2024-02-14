import './styles/index.scss';
import AppRouter from 'app/providers/router/ui/AppRouter';
import { classNames } from 'shared/lib/classNames/classNames';
import { Header } from 'widgets/Header';


const App = () => {
	return (
		<div className={classNames('app')}>
			<div className="content">
				<Header/>
				<AppRouter/>
			</div>
		</div>
	);
};

export default App;
