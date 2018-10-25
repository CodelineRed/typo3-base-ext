lib.search = TEXT
lib.search.value (
    <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-light my-2 my-sm-0" type="submit"><i class="fas fa-search"></i></button>
    </form>
)

lib.search >
lib.search < tt_content.list.20.indexedsearch_pi2
lib.search {
    controller = Search
    action = form

    view =< plugin.tx_indexedsearch.view
    persistence < plugin.tx_indexedsearch.persistence
    settings =< plugin.tx_indexedsearch.settings
    settings {
        navigation = 1
    }
}