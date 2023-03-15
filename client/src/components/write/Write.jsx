import './write.css'

export default function Write() {
  return (
      <div className='write'>
          <form className='writeForm'>
              <div className='writeFormGroup'>
                  <label htmlFor="fileInput">
                      <i class="fa-regular fa-plus"></i>
                  </label>
                  <input type="file" id="fileInput"
                    //   style={{
                    //   display: "none"
                  //   }} 
                  />
                  <input type="text" placeholder="title"/>
                </div>
            </form>
    </div>
  )
}
