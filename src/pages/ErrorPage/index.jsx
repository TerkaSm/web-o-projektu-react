import './style.scss';

export const ErrorPage = () => {
    return (
      <main>
        <section className='error'>
          <h2 className='error__title'>404: Tady nic není</h2>
          <p className='error__text'>Asi jste se spletli</p>
        </section>
      </main>
    );
  };