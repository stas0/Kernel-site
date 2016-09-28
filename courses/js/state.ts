export class ToolbarState {
    constructor() {
        $(document).ready(() => {
            let state = $('.courses .header .toolbar > div.state');
            let list = state.find('.list');

            state.find('.btn').click((e) => {
                list.toggleClass('switch');
            });

            $('*').mousedown((e) => {
                e.stopPropagation();

                if ($(e.target).hasClass('state') || $(e.target).parent().hasClass('state')) {
                    return;
                }

                let parents = $(e.target).parentsUntil('div.state');
                let parent = $(parents[parents.length - 1]).parent();

                if (parent.hasClass('state')) {
                    return;
                }

                list.removeClass('switch');
            });
        });
    }
}