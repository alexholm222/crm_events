import s from './ButtonSecond.module.scss';
import classNames from 'classnames';
//components
import LoaderButton from './LoaderButton/LoaderButton';


const ButtonSecond = ({ handler, buttonText, Icon, isLoading, width }) => {
    return (
        <div style={{width: width ? `${width}px` : 'auto'}} onClick={handler} className={s.root}>
            <Icon className={classNames(s.icon, isLoading && s.icon_hidden)} />
            <div className={classNames(s.loader, isLoading && s.loader_vis)}>
                <LoaderButton color={'#002CFB'} />
            </div>
            <p>{buttonText}</p>

        </div>
    )
};

export default ButtonSecond;