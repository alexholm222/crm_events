import s from './List.module.scss';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
//Api
import { useGetEventsInfiniteQuery } from '../../redux/ordersApiActions';



//components
import Header from '../../components/Header/Header';
import SubHeader from '../../components/SubHeader/SubHeader';
import Table from '../../components/Table/Table';
import TableSceleton from '../../components/TableSceleton/TableSceleton';
//constants
import { useEffect, useState } from 'react';

const events = [{}]

const List = () => {
    const [anim, setAnim] = useState(false)
    const { search } = useSelector((state) => state.filters);
    const { dateStart, dateEnd } = useSelector((state) => state.dateRange);
    const params = {
        'filter[search]': search,

    };

    const { data, fetchNextPage, isLoading, isError, isFetching } = useGetEventsInfiniteQuery(params, { refetchOnMountOrArgChange: true });

    const allData = data?.pages?.map((el) => { return el.data })?.flat()

    useEffect(() => {
        setTimeout(() => {
            setAnim(true)
        })
    }, [])


    const handleLoadEvents = () => {
        fetchNextPage()
    }

    const events = [{
        id: 1,
        date: '2024-03-02T12:30',
        person: {
            name: "Иван",
            surname: "Иванов",
            position: "accountant"
        },
        log: 'Утверждены рабочие на заказ по адресу Московское шоссе, д. 52к3 на сумму 800 руб. а заказ по адресу Московское шоссе, д. 52к3 на сумм а заказ по адресу Московское шоссе, д. 52к3 на сумм',
        type: 'Заказы'
    },
    {
        id: 2,
        date: '2025-08-04T12:30',
        person: {
            name: "Иван",
            surname: "Иванов",
            position: "accountant"
        },
        log: 'Утверждены рабочие на заказ по адресу Московское шоссе, д. 52к3 на сумму 800 руб.',
        type: 'Заказы'
    }
    ]



    return (
        <div className={classNames(s.root, anim && s.root_anim)}>
            <Header
                title={'События'}
            />
            <SubHeader isFetching={isFetching} />
            <InfiniteScroll
                loader={false}
                scrollThreshold={0.3}
                dataLength={events?.length || 0}
                next={handleLoadEvents}
                hasMore={true}
                scrollableTarget="scrollableDiv"
                style={{ overflow: 'visible' }}
                endMessage={
                    <p style={{ textAlign: "center" }}>

                    </p>
                }
            >
                <div className={s.container}>
                    <Table data={events} />
                    <TableSceleton isLoading={false} />
                </div>

            </InfiniteScroll>

        </div>
    )
};

export default List;