import s from './SubHeader.module.scss';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//icons
import { ReactComponent as IconHome } from '../../assets/icons/filters/iconHome.svg'
import { ReactComponent as IconWallet } from '../../assets/icons/filters/iconWallet.svg'
import { ReactComponent as IconStatistic } from '../../assets/icons/filters/iconStatistic.svg'
import { ReactComponent as IconCalendar } from '../../assets/icons/filters/iconCalendar.svg'
//components
import Search from '../Search/Search';
import FilterDate from '../General/FilterDate/FilterDate';
import Filters from '../Filters/Filters';
import FiltersPersons from '../FiltersPersons/FiltersPersons';



const SubHeader = ({ isFetching }) => {
    const { filterType, filterPerson } = useSelector((state) => state.filters);


    return (
        <div className={s.root}>
            <Search isFetching={isFetching} />
            <div className={s.filters}>
                <FiltersPersons isFetching={isFetching}/>
                <Filters isFetching={isFetching}/>
                {/*   <Filter title={'Статус'} Icon={IconStatistic} type={'customer'} /> */}
                <FilterDate
                    title={'Период'}
                    Icon={IconCalendar}
                    isFetching={isFetching}
                />
            </div>


        </div>
    )
};

export default SubHeader;