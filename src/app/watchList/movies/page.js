

export default function Page() {

    return (
            <div role="tablist" className="tabs tabs-lifted px-16 py-8">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Movies" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    Tab content 1
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab"
                    aria-label="TV Series"
                    defaultChecked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    Tab content 2
                </div>
            </div>
        
    )
}