import './styles/index.scss';
import AppRouter from 'app/providers/router/ui/AppRouter';
import { classNames } from 'shared/lib/classNames/classNames';
import { Header } from 'widgets/Header';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInited } from 'entities/User';
import { userActions } from 'entities/User/model/slice/userSlice';


const App = () => {
	const inited = useSelector(getUserInited);

	return (
		<div className={classNames('app')}>
			<div className="content">
				<Header/>
				{
					inited && <AppRouter/>
				}
			</div>
		</div>
	);
};

export default App;
