import React from "react"

function BrowseByCategoryHeading()
{
    return (
        <div className="columns-3 text-left pl-4">
            <div className="w-full">
                Categories
            </div>
        </div>
    )
}

function BrowseByCategoryTime()
{
    return (
        <div className="columns-3 text-left pt-4 pl-4">
            <div className="w-full">
                Browse by category
            </div>
        </div>
    )
}

function BrowseByCategoryHeader()
{
    return (
        <>
            <BrowseByCategoryHeading/>
            <BrowseByCategoryTime/>
        </>
    )
}

export default BrowseByCategoryHeader  