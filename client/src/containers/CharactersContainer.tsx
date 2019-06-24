import React from 'react'
import ReactPaginate from 'react-paginate'
import CharacterList from "../components/CharacterList";

interface IState {
    offset: number,
}

export default class CharactersContainer extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            offset: 0,
        };

        this.handlePageClick = this.handlePageClick.bind(this);
    }

    handlePageClick = (data: any) => {
        let selected = data.selected;
        let offset = Math.ceil(selected * 10);

        this.setState({offset: offset});
    };


    render() {
        return (
            <div>
                <CharacterList limit={10} offset={this.state.offset}/>
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={50}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />
            </div>
        );
    }
}