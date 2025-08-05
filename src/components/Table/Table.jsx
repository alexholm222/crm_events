import s from './Table.module.scss';
import classNames from 'classnames';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
//components
import CommentList from '../CommentList/CommentList';
//utils
import { handleDefinePosition } from '../../utils/definePosition';

const Table = ({ data }) => {

    return (
        <table className={s.root}>
            <thead>

                <td className={s.date}>Дата и время</td>
                <td className={s.person}>Пользователь</td>
                <td className={s.event}>Событие</td>
                <td className={s.type}>Раздел</td>





            </thead>
            <tbody>


                {data?.map((el) => {
                    return <Row key={el.id} event={el} />
                })}
            </tbody>
        </table>
    )
};


const Row = ({ event }) => {
    const { date, person, log, type } = event;
    const dateNow = dayjs()
    const daydiff = dateNow.diff(dayjs(date), 'day');
    const yearDiff = dateNow.diff(dayjs(date), 'year');
    console.log(date, yearDiff)

    return (
        <tr className={s.row}>
            <td className={s.border}></td>
            <td className={s.date}>
                {daydiff === 0 && `Сегодня ${dayjs(date).format('HH:mm')}`}
                {daydiff === 1 && `Вчера ${dayjs(date).format('HH:mm')}`}
                {daydiff > 1 && yearDiff === 0 && dayjs(date).locale('ru').format('D MMMM HH:mm')}
                {yearDiff > 0 && dayjs(date).locale('ru').format('DD.MM.YY HH:mm')}

            </td>
            <td className={s.person}>
                <p>{person.name} {person.surname.slice(0, 1)} <span>{handleDefinePosition(person.position)}</span></p>
                </td>
            <td className={s.event}>
                <CommentList comment={log} />
            </td>
            <td className={s.type}>
                <section className={s.lable}>
                    <span>{type}</span>
                </section>
            </td>


        </tr>

    )
};



export default Table;