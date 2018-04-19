import React from "react";
export const BlogList = bloglist => (
    <ul>
        {
            bloglist.map(({ body, author, id}) => 
                <li key={id} value={id}>{body}-{author}</li>
            )
        }
    </ul>
)