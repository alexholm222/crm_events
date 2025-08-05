import s from './FiltersPersons.module.scss';
import classNames from 'classnames';
import { useRef, useState, useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//icons
import { ReactComponent as IconFilterSettingts } from '../../assets/icons/IconWorkers.svg';
import { ReactComponent as IconDoneWhite } from '../../assets/icons/iconDoneWhite.svg';
import { ReactComponent as IconCloseBlue } from '../../assets/icons/iconCloseBlue.svg';
//slice
import { setFilterPerson } from '../../redux/filters/slice';
//components
import FilterButton from '../General/FilterButton/FilterButton';
import Button from '../General/Button/Button';
import ButtonSecond from '../General/ButtonSecond/ButtonSecond';
import CheckBoxList from '../General/CheckBoxList/CheckBoxList';


const list = [{
    id: 1,
    name: "Иван",
    surname: "Иванов",
    position: "accountant"
},
{
    id: 2,
    name: "Иван2",
    surname: "Иванов2",
    position: "accountant"
},]

const FiltersPersons = memo(({isFetching}) => {
    const { filterPerson } = useSelector(state => state.filters)
    const [openModal, setOpenModal] = useState(false);
    const [activeItems, setActiveItems] = useState([])
    const [count, setCount] = useState(0);
    const [load, setLoad] = useState(false);
    const [done, setDone] = useState(false);
    const dispatch = useDispatch();
    const modalRef = useRef()
    const buttonRef = useRef()

    useEffect(() => {
        !isFetching && setLoad(false)
        !isFetching && count > 0 && setDone(true)
        count === 0 && setDone(false)
    }, [isFetching, count])


    const handleOpen = () => {
        openModal ? setOpenModal(false) : setOpenModal(true)
    }

    const handleReset = () => {
        setActiveItems([])
        dispatch(setFilterPerson([]))
        setOpenModal(false)
        setDone(false)
    }

    const handleConfirm = () => {
        setDone(false)
        setLoad(true)
        dispatch(setFilterPerson(activeItems))
        setOpenModal(false)
    }

    useEffect(() => {
        const clickOutside = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target) && !buttonRef.current.contains(e.target)) {
                setOpenModal(false);
            }
        };
        document.body.addEventListener('mousedown', clickOutside);
        return () => document.body.removeEventListener('mousedown', clickOutside);
    }, []);

    return (
        <div className={s.root}>
            <FilterButton
                title={'Пользователь'}
                Icon={IconFilterSettingts}
                load={load}
                done={done}
                count={count}
                handleReset={handleReset}
                handleOpen={handleOpen}
                buttonRef={buttonRef}
            />

            <div ref={modalRef} className={classNames(s.modal, openModal && s.modal_open)}>

                <div className={s.block}>
                    <span>Пользователь</span>
                    <CheckBoxList
                        list={list}
                        active={activeItems}
                        setActive={setActiveItems}
                        person={true}
                    />
                </div>




                <div className={s.buttons}>
                    <ButtonSecond
                        handler={handleReset}
                        buttonText={'Сброс'}
                        Icon={IconCloseBlue}
                        isLoading={false}
                    />

                    <Button
                        handler={handleConfirm}
                        buttonText={'Применить'}
                        Icon={IconDoneWhite}
                        isLoading={false}
                    />
                </div>
            </div>
        </div>
    )
});

export default FiltersPersons;