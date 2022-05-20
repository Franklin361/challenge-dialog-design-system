import { render, screen, act } from '@testing-library/react';
import user from '@testing-library/user-event';

import App from '../App';

import { buttons } from '../utils';


describe('⚫️ Renders ...', () => {

  test('👉 the Buttons to open modal dialog correctly', async () => {

    render(<App />);

    const buttonsInScreen = await screen.findAllByRole('button');
    expect(buttonsInScreen.length).toBe(3)

    buttons.forEach(({ label }) => {
      expect(screen.queryByText(label)).toBeInTheDocument()
    })

  });
})

describe('⚫️ When the button is clicked ...', () => {
  test('👉 Display warning modal dialog', async () => {
    render(<App />);

    const label = buttons[0].label;
    const buttonWarningDialog = await screen.findByText(label);
    user.click(buttonWarningDialog);

    expect(screen.queryByText('¡Cuidado!')).toBeInTheDocument();
    expect(screen.queryByText('No podrás volver atrás')).toBeInTheDocument();
    expect(screen.queryByText('Borrar')).toBeInTheDocument();
    expect(screen.queryByText('Cancelar')).toBeInTheDocument();

    const buttonsInScreen = await screen.findAllByRole('button');
    expect(buttonsInScreen.length).toBe(6)

  });

  test('👉 Display error modal dialog', async () => {
    render(<App />);

    const label = buttons[1].label;
    const buttonErrorDialog = await screen.findByText(label);
    user.click(buttonErrorDialog);
    expect(screen.queryByText('Upss')).toBeInTheDocument();
    expect(screen.queryByText('Algo ha pasado')).toBeInTheDocument();

    const buttonsInScreen = await screen.findAllByRole('button');
    expect(buttonsInScreen.length).toBe(4)
  });

  test('👉 Display success modal dialog', async () => {
    render(<App />);

    const label = buttons[2].label;
    const buttonSuccessDialog = await screen.findByText(label);
    user.click(buttonSuccessDialog);
    expect(screen.queryByText('¡Vamos!')).toBeInTheDocument();
    expect(screen.queryByText('Todo ha salido bien:)')).toBeInTheDocument();
    expect(screen.queryByText('Cerrar pestaña')).toBeInTheDocument();

    const buttonsInScreen = await screen.findAllByRole('button');
    expect(buttonsInScreen.length).toBe(5)
  });
})

describe('⚫️ When is ...', () => {
  buttons.forEach(({ label, icon }) => {
    test(`👉 clicked the button (x) into ${icon} dialog, close dialog`, async () => {
      render(<App />);

      const btnErrorDialog = await screen.findByText(label);
      user.click(btnErrorDialog); //open the modal dialog

      const btnCloseModal = (await screen.findByAltText('close')).parentElement;
      user.click(btnCloseModal!); //close the modal

      const buttonsInScreen = await screen.findAllByRole('button');
      expect(buttonsInScreen.length).toBe(3) // only 3 buttons  
    })
  })

  test('👉 clicked the button (Cerrar pestaña) into success dialog, close dialog', async () => {
    render(<App />);

    const label = buttons[2].label;
    const btnOpenDialog = await screen.findByText(label);
    user.click(btnOpenDialog); //open the error modal dialog

    const btnCloseTab = await screen.findByText('Cerrar pestaña');
    user.click(btnCloseTab!);

    expect(screen.queryByText('¡Vamos!')).not.toBeInTheDocument();
    expect(screen.queryByText('Todo ha salido bien:)')).not.toBeInTheDocument();

    const buttonsInScreen = await screen.findAllByRole('button');
    expect(buttonsInScreen.length).toBe(3)

  })

  test('👉 clicked the button (Cancelar) into warning dialog, close dialog', async () => {
    render(<App />);

    const label = buttons[0].label;
    const btnOpenDialog = await screen.findByText(label);
    user.click(btnOpenDialog); //open the error modal dialog

    const btnCancel = await screen.findByText('Cancelar');
    user.click(btnCancel!);

    expect(screen.queryByText('¡Cuidado!')).not.toBeInTheDocument();
    expect(screen.queryByText('No podrás volver atrás')).not.toBeInTheDocument();

    const buttonsInScreen = await screen.findAllByRole('button');
    expect(buttonsInScreen.length).toBe(3)

  })

  test('👉 clicked the button (Borrar) into warning dialog, show message and close dialog', async () => {
    render(<App />);

    const label = buttons[0].label;
    const btnOpenDialog = await screen.findByText(label);
    user.click(btnOpenDialog); //open the error modal dialog

    const btnDelete = await screen.findByText('Borrar');
    user.click(btnDelete!);
    expect(screen.queryByText('Elemento borrado correctamente! ✅')).toBeInTheDocument();
    
    expect(btnDelete).toBeDisabled()

    await act( ()=>  new Promise(res => setTimeout(res, 2000)))

    expect(screen.queryByText('¡Cuidado!')).not.toBeInTheDocument();
    expect(screen.queryByText('No podrás volver atrás')).not.toBeInTheDocument();
    const buttonsInScreen = await screen.findAllByRole('button');
    expect(buttonsInScreen.length).toBe(3)

  })

  test('👉 clicked the background outside the modal dialog, close dialog', async() => {
    render(<App />);

    const btnOpenModal = await screen.findByText(buttons[0].label);
    user.click(btnOpenModal); //open the modal dialog

    const dialog = await screen.findByRole('dialog')
    user.click(dialog); //close the modal

    const buttonsInScreen = await screen.findAllByRole('button');
    expect(buttonsInScreen.length).toBe(3) // only 3 buttons  
  })
  
  test('👉 pressed the key Escape, close dialog ', async() => {
    render(<App />);

    const btnOpenModal = await screen.findByText(buttons[0].label);
    user.click(btnOpenModal); //open the modal dialog

    user.keyboard('{Escape}')

    const buttonsInScreen = await screen.findAllByRole('button');
    expect(buttonsInScreen.length).toBe(3) // only 3 buttons  
  })
})
