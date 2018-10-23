// SEO Canonical
lib.canonical = COA
lib.canonical {
    10 = TEXT
    10 {
        typolink {
            parameter.data = TSFE:id
            addQueryString = 1
            addQueryString {
                method = GET
                // vermeide doppelte id:
                exclude = id
            }
            returnLast = url
        }
        wrap = <link rel="canonical" href="|" />
    }
}