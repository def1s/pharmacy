import cls from './UserProfile.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface UserProfileProps {
    className?: string;
	avatar: string;
	username: string;
}

export const UserProfile = ({ className, avatar, username }: UserProfileProps) => {

	return (
		<div className={classNames(cls.UserProfile, {}, [className])}>
			<img className={cls.avatar} src={avatar} alt={'user avatar'}/>
			<div className={cls.username}>{username}</div>
		</div>
	);
};
