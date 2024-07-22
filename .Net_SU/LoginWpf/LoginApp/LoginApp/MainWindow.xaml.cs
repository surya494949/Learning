using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace LoginApp
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }
        private void LoginWebBrowser_Loaded(object sender, RoutedEventArgs e)
        {
            LoginWebBrowser.Navigate("https://auth.openai.com/authorize?client_id=TdJIcbe16WoTHtN95nyywh5E4yOo6ItG&scope=openid%20email%20profile%20offline_access%20model.request%20model.read%20organization.read%20organization.write&response_type=code&redirect_uri=https%3A%2F%2Fchatgpt.com%2Fapi%2Fauth%2Fcallback%2Flogin-web&audience=https%3A%2F%2Fapi.openai.com%2Fv1&device_id=f88a679a-4a2e-4900-8b6b-3241c59db7db&prompt=login&screen_hint=login&ext-statsig-tier=production&ext-oai-did=f88a679a-4a2e-4900-8b6b-3241c59db7db&flow=control&state=xy4ZMctv5NGurhUxSnhtO5ngyhUYS4Q3RL6S-ILU8FY&code_challenge=y9mnyCBFajL1n_EuE-8QhfjMvFccaQQwtOxJJwXpNTM&code_challenge_method=S256");
        }

        private void LoginWebBrowser_Navigated(object sender, NavigationEventArgs e)
        {
            // Check the URL or the page content to determine if login was successful and retrieve the token
            if (e.Uri.ToString().Contains("successful-login-page")) // Adjust this condition to match your scenario
            {
                // Extract the token from the URL or page content
                string token = ExtractTokenFromPage(LoginWebBrowser);
                MessageBox.Show($"Login successful! Token: {token}");
            }
        }

        private string ExtractTokenFromPage(WebBrowser webBrowser)
        {
            return "extracted-token";
        }
    }
}
