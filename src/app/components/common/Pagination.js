import React, {Component} from 'react'

class Pagination extends Component {
    render() {
        const {size, pagination} = this.props,
            {_page: page, _limit: limit, _total: total} = pagination,
            pages = Math.ceil(total/limit),
            halfSize = Math.floor(size/2);

        let minPageIndex = 1, maxPageIndex = pages;

        if(pages > size) {
            if(pages - page <= halfSize) {
                minPageIndex = pages-size;
            } else if(page - 1 <= halfSize) {
                maxPageIndex = size;
            } else {
                minPageIndex = page - halfSize;
                maxPageIndex = page + halfSize;
            }
        }

        return total > 0 && (
                <ul className="pagination pagination-sm">
                    <li onClick={e => this.handlePagination(page-1, pages)} className={page === 1 ? 'disabled': ''} >
                        <a aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    {this.renderPageIndices(page, minPageIndex, maxPageIndex)}
                    <li onClick={e => this.handlePagination(page+1, pages)} className={page === pages ? 'disabled': ''} >
                        <a aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
        );
    }

    renderPageIndices(page, minPageIndex, maxPageIndex, pages) {
        let pageIndices = [];
        for(let i = minPageIndex; i <= maxPageIndex; i++) {
            pageIndices.push(
                <li key={i} className={i === page ? 'active' : ''}><a onClick={e => this.handlePagination(i, pages)}>{i}</a></li>
            );
        }

        return pageIndices;
    }

    handlePagination(nextPage, pages) {
        const {pagination, handlePagination} = this.props;

        if(nextPage < 1 || nextPage > pages) return;
        handlePagination({
            ...pagination,
            _page: nextPage
        });
    }
}

export default Pagination