class App extends Component {
  state = {
    posts: [{
      name: 'cat',
      selected: false,
    }, {
      name: 'dog',
      selected: false
    }]
  }

  handleClick = (e) => {
    const { posts } = this.state;
    const { id } = e.target;
    posts[id].selected = !this.state.posts[id].selected
    this.setState({ posts })
  }

  render() {
    return (
      <div>
        <form>
          {this.state.posts.map((p, i) => {
            return (
              <div>
                <label>{p.name}</label>
                <input type="radio" id={i} key={i} checked={p.selected} onClick={this.handleClick} />
              </div>
            )
          })}
        </form>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
4
{toggleState && (
  <StyledTexte>
    <StyledH2>
      <h2>{ArtistsItem.node.title}</h2>
    </StyledH2>
  </StyledTexte>
)}

<StyledFlexBoxArtist>
  <StyledImg
    img
    src={ArtistsItem.node.featured_media.source_url}
    alt={ArtistsItem.node.title}
    width="500px"
  />

  {/* <div
    dangerouslySetInnerHTML={{ __html: ArtistsItem.node.excerpt }}
  /> */}
</StyledFlexBoxArtist>