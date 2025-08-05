import s from './CheckBoxList.module.scss';
import classNames from 'classnames';
//components
import CheckBox from '../CheckBox/CheckBox';
//utils
import { handleDefinePosition } from '../../../utils/definePosition';

const CheckBoxList = ({ list, active, setActive, column, person }) => {

    const handleActive = (e) => {
        const id = e.currentTarget.id
        if (active?.some(el => el == id)) {
            setActive(prevState => [...prevState].filter(el => el != id))
        } else {
            setActive(prevState => [...prevState, id])
        }
    }
    return (
        <div className={classNames(s.root, person && s.root_person)}>
            {list?.map(el => {
                const isActive = active?.some(item => item == el.id)
                return <li onClick={handleActive} key={el.id} id={el.id} className={classNames(s.item, isActive && s.item_active)}>
                    <CheckBox active={isActive} />
                    <p>{el.name} {person && el.name.slice(0, 1)}<span>{person && handleDefinePosition(el.position)}</span></p>
                </li>
            })}

        </div>
    )
};

export default CheckBoxList;