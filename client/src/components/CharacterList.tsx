import React from 'react'
import Character from "./Character";

const APIURL = 'http://localhost:4000/characters';

interface IProps {
    limit: number,
    offset: number,
}

interface IState {
    data: [],
    isLoading: boolean,
    error: any
    offset: number
}

export default class CharacterList extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: [],
            isLoading: false,
            error: null,
            offset: props.offset
        };
    }

    componentDidMount() {
        this.fetchData()
    }

    componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any): void {
        if (this.props.offset !== prevProps.offset) {
            this.setState({
                offset: this.props.offset,
            }, () => {
                this.fetchData()
            })

        }
    }

    fetchData() {
        this.setState({isLoading: true});

        let params = new URLSearchParams();
        params.set('offset', String(this.state.offset));
        params.set('limit', String(this.props.limit));

        fetch(APIURL + `?${params.toString()}`,
            {
                mode: 'cors',
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data => {
                this.setState({
                    data,
                    isLoading: false
                })
            })
            .catch(error => this.setState({error, isLoading: false}));
    }

    render() {
        const {data, isLoading, error} = this.state;

        if (error) {
            return <p>{error.message}</p>;
        }

        if (isLoading) {
            return <p>Loading ...</p>;
        }

        return (
            <div>
                <ul className="character-list">
                    {data.map(hero => {
                            const {thumbnailUrl, title, id} = hero;
                            return (
                                <li key={id}>
                                    <Character name={title} photo={thumbnailUrl}/>
                                </li>
                            )
                        }
                    )}
                </ul>
            </div>
        );
    }
}