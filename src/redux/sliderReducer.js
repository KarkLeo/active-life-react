const TO_SLIDER_BY_ID = 'TO-SLIDER-BY-ID'
const UPDATE_SLIDE_CONTENT = 'UPDATE-SLIDE-CONTENT'
const ADD_SLIDE = 'ADD-SLIDE'
const DELETE_SLIDE = 'DELETE_SLIDE'

const initialState = {
    slides: [
        {
            id: 0,
            title: 'Разнообразный и богатый опыт',
            text: 'Разнообразный и богатый опыт новая модель организационной деятельности позволяет оценить значение направлений прогрессивного развития. ',
            button: {text: 'выполнять важные задания', path: 'https://www.google.com/'},
            image: 'https://images.unsplash.com/photo-1567647753830-de3fe7ce9f28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80',
            status: true
        },
        {
            id: 1,
            title: 'Значимость этих проблем',
            text: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям.',
            button: {text: 'модернизации систем', path: 'https://www.google.com/'},
            image: 'https://images.unsplash.com/photo-1567647753505-2c5e35a2fec0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            status: false
        },
        {
            id: 2,
            title: 'Таким образом новая модель организационной деятельности',
            text: 'Таким образом новая модель организационной деятельности представляет собой интересный эксперимент проверки позиций, занимаемых участниками в отношении поставленных задач. ',
            button: {text: 'участие в формировании', path: 'https://www.google.com/'},
            image: 'https://images.unsplash.com/photo-1567628065080-ecdec09a7588?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1256&q=80',
            status: false
        },
        {
            id: 3,
            title: 'Товарищи! постоянный количественный рост',
            text: 'Товарищи! постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям. ',
            button: {text: 'Задача организации', path: 'https://www.google.com/'},
            image: 'https://images.unsplash.com/photo-1567610470043-3e1f65498370?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
            status: false
        },
        {
            id: 4,
            title: 'Равным образом консультация 2',
            text: 'Равным образом консультация с широким активом позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач. ',
            button: {text: 'процесс внедрения', path: 'https://www.google.com/'},
            image: 'https://images.unsplash.com/photo-1568211879321-ead5596d83f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            status: false
        }
    ]
}

const sliderReducer = (state = initialState, action) => {

    switch (action.type) {
        case TO_SLIDER_BY_ID:
            return {
                ...state,
                slides: state.slides.map((slide) => {
                    slide.status = action.slideId === slide.id
                    return slide;
                })
            };

        case UPDATE_SLIDE_CONTENT:
            return {
                ...state,
                slides: state.slides.map((slide, i) => slide.id === action.slide.id
                    ? {...action.slide, status: i===0}
                    : {...slide, status: i===0})
            }

        case ADD_SLIDE:
            return {
                ...state,
                slides: [
                    ...state.slides, {
                        id: state.slides.length > 0 ? state.slides[state.slides.length - 1].id + 1 : 0,
                        title: '',
                        text: '',
                        button: {
                            text: '',
                            path: ''
                        },
                        image: '',
                        status: false
                    }
                ]
            };

        case DELETE_SLIDE:
            return {
                ...state,
                slides: state.slides
                    .filter((slide) => slide.id !== action.slideId)
                    .map((slide, i) => ({...slide, status: i === 0}))
            }

        default:
            return state
    }
}

export const toSliderByIaActionCreator = (id) => ({
    type: TO_SLIDER_BY_ID,
    slideId: id
});

export const updateSlideContentCreator = (slide) => ({
    type: UPDATE_SLIDE_CONTENT,
    slide: slide
});
export const addSlideCreator = () => ({
    type: ADD_SLIDE,
});
export const deleteSlideCreator = (id) => ({
    type: DELETE_SLIDE,
    slideId: id
});

export default sliderReducer;