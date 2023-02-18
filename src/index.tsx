import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.scss';
import {Loader, LoaderSize} from "./components/Loader/Loader";
import {Card} from "./components/Card/Card";
import {Input} from "./components/Input/Input";
import {MultiDropdown, MultiDropdownProps, Option} from "./components/MultiDropdown/MultiDropdown";
import {CheckBox} from "./components/CheckBox/CheckBox";
import {Button} from "./components/Button/Button";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <div>
            <Loader size={LoaderSize.m} loading={true}/>
            <Card
                image="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
                title="Мандарин"
                subtitle="Марокко"
                content={<span><b>299р</b><i>5 отзывов</i></span>}
                onClick={() => console.log('Мандарин куплен!')}
            />
            <Input
                value=""
                onChange={(value: string) => console.log(value)}
                placeholder="Начните набирать свой вопрос"
                // disabled
            />

            <MultiDropdown
                // disabled
                options={[
                    { key: 'msk', value: 'Москва' },
                    { key: 'spb', value: 'Санкт-Петербург' },
                    { key: 'ekb', value: 'Екатеринбург' }
                ]}
                value={[{ key: 'msk', value: 'Москва' }]}
                onChange={()=> console.log('fvdv')}
                pluralizeOptions={(values: Option[]) => 'Москва, Санкт-Петербург'}
            />

            <CheckBox
                checked={true}
                onChange={()=> console.log('fvdv')}
            />

            <CheckBox
                // checked={true}
                onChange={()=> console.log('fvdv')}
            />

            // Заблокированный чекбокс
            <CheckBox
                disabled
                checked={false}
                onChange={()=> console.log('fvdv')}
            />

            // Кнопка с текстом "Отправить", логирующая в консоль "Письмо отправлено" при клике
            <Button onClick={() => console.log('Письмо отправлено')}>
                Отправить
            </Button>

            // Кнопка, отображающая компонент Loader при загрузке каких-то данных
            <Button
                loading={true}
            >
                Отправить
            </Button>

            // Кнопка с элементом в качестве содержимого
            <Button>
                <span>Модная кнопка</span>
            </Button>

            // Заблокированная кнопка с дополнительным классом
            <Button className="some-outer-class" disabled>
                Отправить
            </Button>

            // Кнопка с пропсом нативной кнопки
            <Button onMouseOver={() => console.log('Убери от меня курсор!')}>
                Отправить
            </Button>
        </div>
    </React.StrictMode>
);
