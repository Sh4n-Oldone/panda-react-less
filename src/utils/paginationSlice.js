export default function paginationSlice(dataArray, pageNumber, itemsToShow) {
  return dataArray.slice( 
      ( pageNumber - 1 ) * itemsToShow, pageNumber * itemsToShow 
    )
}