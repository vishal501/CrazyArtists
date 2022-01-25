import React from 'react';

const Page = () => {

    
    return(
        <div>
            <section className="home">
                <div className="text">
                <h1 className="home-heading">CrazyArtists <br/>
                <span>CrazyArtists is a platform which enables artists and teachers to generate more revenue and students for every session, helps artists get best quality art supplies, freebies and more!</span>
                </h1>
                </div>
            </section>

        <div className="cards-margin">
    <h1 className="heading">List of Workshops</h1>
     <section className="cards-body">
    
     <div class="grid">
      <div class="grid-item">
        <div class="card">
          <img class="card-img" src="img/java.png" alt="" />
          <div class="card-content">
            <h1 class="card-header">Website<br/> Development Teacher</h1>
            <div className="rating">
                <div className=""><pre>Views:<span><strong>798</strong></span>       Purchased:<span><strong>32</strong></span></pre></div>   
            </div>
            
            <button class="card-btn"><a href="/web">Visit <span>&rarr;</span></a></button>
          </div>
        </div>
      </div>
      <div class="grid-item">
        <div class="card">
          <img
            class="card-img"
            src="img/java.png"
            alt="Grand Canyon"
          />
          <div class="card-content">
            <h1 class="card-header">Mobile App<br/> Development Teacher</h1>
            <div className="rating">
                <div className=""><pre>Views:<span><strong>645</strong></span>       Purchased:<span><strong>36</strong></span></pre></div>   
            </div>
            <button class="card-btn"><a href="/mobile">Visit <span>&rarr;</span></a></button>
          </div>
        </div>
      </div>
      <div class="grid-item">
        <div class="card">
          <img class="card-img" src="img/java.png" alt="" />
          <div class="card-content">
            <h1 class="card-header">Branding and<br/> Designing Teacher</h1>
            <div className="rating">
                <div className=""><pre>Views:<span><strong>565</strong></span>       Purchased:<span><strong>45</strong></span></pre></div>   
            </div>
            <button class="card-btn"><a href="/brand">Visit <span>&rarr;</span></a></button>
          </div>
        </div>
      </div>
      <div class="grid-item">
        <div class="card">
          <img class="card-img" src="img/java.png" alt="" />
          <div class="card-content">
            <h1 class="card-header">Social Media<br/> Marketing Teacher</h1>
            <div className="rating">
                <div className=""><pre>Views:<span><strong>458</strong></span>       Purchased:<span><strong>72</strong></span></pre></div>   
            </div>
            <button class="card-btn"><a href="/social">Visit <span>&rarr;</span></a></button>
          </div>
        </div>
      </div>
      <div class="grid-item">
        <div class="card">
          <img class="card-img" src="img/java.png" alt="" />
          <div class="card-content">
            <h1 class="card-header">Search Engine<br/> Optimization Teacher</h1>
            <div className="rating">
                <div className=""><pre>Views:<span><strong>736</strong></span>       Purchased:<span><strong>23</strong></span></pre></div>   
            </div>
            <button class="card-btn"><a href="/seo">Visit <span>&rarr;</span></a></button>
          </div>
        </div>
      </div>
      <div class="grid-item">
        <div class="card">
          <img class="card-img" src="img/java.png" alt="" />
          <div class="card-content">
            <h1 class="card-header">UIUX <br/>Designing Teacher</h1>
            <div className="rating">
                <div className=""><pre>Views:<span><strong>567</strong></span>       Purchased:<span><strong>52</strong></span></pre></div>   
            </div>
            <button class="card-btn"><a href="/uiux">Visit <span>&rarr;</span></a></button>
          </div>
        </div>
      </div>
    </div>
    
     </section>
     </div>
     <div className="why">
         <h1>Why Join Us</h1>
         <p>Fast growing online classes due to pandemic and accessibility to free classes and workshops charging as low as 49rs audience has started investing time and money in hobbies and DIY activities as method of bonding, time pass, interest and more based on dif target audience.</p>
     </div>
     <div className="value">
         <h1>Value-Props/USPs of your solution</h1>
         <ul>
             <li>What are the unique value props of your solution?</li>
             <li>Teachers and Artists targeted sales Channels </li>
             <li>Quality Assurance</li>
             <li>On time delivery</li>
         </ul>
     </div>
     <div className="blue"></div>
     </div>
            
    );
}

export default Page;