class AppQuery {
    #query;
    #queryString;

    constructor(query, queryString) {
        this.#query = query;
        this.#queryString = queryString;
    }

    get query() {
        return this.#query;
    }

    filter() {
        let query = {...this.#queryString};
        const excluded = ['limit', 'page', 'order', 'fields'];
        excluded.forEach(el => delete query[el]);
        query = JSON.parse(JSON.stringify(query).replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`));
        this.#query = this.#query.find(query);

        return this;
    }

    sort() {
        if (this.#queryString.order) {
            this.#query = this.#query.sort(this.#queryString.order.split(',').join(' '));
        } else {
            // sorted by date the newest to oldest
            this.#query = this.#query = this.#query.sort('-createdAt');
        }
        return this;
    }

    limitFields() {
        if (this.#queryString.fields) {
            this.#query = this.#query.select(this.#queryString.fields.split(',').join(' '));
        } else {
            this.#query = this.#query.select('-__v');
        }
        return this;
    }

    paginate() {
        const page = Number(this.#queryString.page) || 1;
        const limit = Number(this.#queryString.limit) || 100;
        const skip = (page - 1) * limit;
        // const numTours = this.#query.countDocuments();
        // if (this.#queryString.page && skip >= numTours) new Error('This page does not exists !');
        this.#query = this.#query.skip(skip).limit(limit);
        return this;
    }
}

module.exports = AppQuery;