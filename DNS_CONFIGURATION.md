# DNS Configuration for pepedhub.com

**Date Configured:** December 4, 2025  
**Domain:** pepedhub.com  
**Registrar:** GoDaddy  
**Hosting:** Netlify

---

## Current DNS Records

### A Record (Root Domain)
```
Type: A
Name: @
Value: 75.2.60.5
TTL: 1 Hour (3600 seconds)
Purpose: Points pepedhub.com to Netlify servers
```

### CNAME Record (WWW Subdomain)
```
Type: CNAME
Name: www
Value: drspeptides-education.netlify.app
TTL: 1 Hour (3600 seconds)
Purpose: Points www.pepedhub.com to Netlify site
```

### Nameserver Records (NS)
```
Type: NS
Name: @
Value: ns43.domaincontrol.com
TTL: 1 Hour

Type: NS
Name: @
Value: ns44.domaincontrol.com
TTL: 1 Hour
Purpose: GoDaddy nameservers for DNS management
```

### Start of Authority (SOA)
```
Type: SOA
Name: @
Value: Primary nameserver: ns43.domaincontrol.com
TTL: 1 Hour
Purpose: Defines authoritative nameserver
```

### Domain Connect Record (CNAME)
```
Type: CNAME
Name: _domainconnect
Value: _domainconnect.gd.domaincontrol.com
TTL: 1 Hour
Purpose: GoDaddy domain connection service
```

### Email Security (TXT)
```
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=quarantine; adkim=r; aspf=r; rua=mailto:dmarc_rua@onsecureserver.net;
TTL: 1 Hour
Purpose: DMARC email authentication policy
```

---

## How DNS Works for This Setup

### User visits pepedhub.com:
1. Browser queries DNS for pepedhub.com
2. GoDaddy nameservers respond with A record: 75.2.60.5
3. Browser connects to Netlify servers at that IP
4. Netlify serves the site content from global CDN
5. SSL certificate encrypts the connection (HTTPS)

### User visits www.pepedhub.com:
1. Browser queries DNS for www.pepedhub.com
2. GoDaddy nameservers respond with CNAME: drspeptides-education.netlify.app
3. Browser resolves Netlify subdomain to Netlify IP
4. Netlify automatically redirects to https://pepedhub.com (primary domain)
5. Site loads with SSL encryption

---

## Netlify IP Address

**Current Netlify Load Balancer IP:** 75.2.60.5

**Note:** This IP is Netlify's load balancer and may change. If Netlify changes their IP:
1. Netlify will notify via email
2. Update the A record in GoDaddy to new IP
3. Wait 1-24 hours for DNS propagation

**Alternative:** Use CNAME for apex domain (requires Netlify DNS or ALIAS record support)

---

## DNS Propagation Timeline

| Time | Status |
|------|--------|
| 0-5 min | Changes saved in GoDaddy |
| 5-30 min | Propagating to local DNS servers |
| 30-60 min | Propagating globally |
| 1-24 hours | Full global propagation |
| 24-48 hours | All DNS caches updated |

**Check propagation:** https://dnschecker.org/#A/pepedhub.com

---

## SSL/HTTPS Configuration

### Let's Encrypt Certificate
- **Provider:** Let's Encrypt (via Netlify)
- **Type:** Domain Validated (DV)
- **Domains Covered:**
  - pepedhub.com
  - www.pepedhub.com
- **Validity:** 90 days
- **Auto-renewal:** Yes (Netlify handles automatically)
- **Cost:** Free

### HTTPS Settings in Netlify
- **Force HTTPS:** Enabled (redirects HTTP → HTTPS)
- **HSTS:** Enabled (browser remembers to use HTTPS)
- **Certificate Status:** Provisioning (will complete after DNS propagates)

---

## Verification Commands

### Check A Record
```bash
dig pepedhub.com A +short
# Should return: 75.2.60.5
```

### Check CNAME Record
```bash
dig www.pepedhub.com CNAME +short
# Should return: drspeptides-education.netlify.app.
```

### Check Nameservers
```bash
dig pepedhub.com NS +short
# Should return:
# ns43.domaincontrol.com.
# ns44.domaincontrol.com.
```

### Test Website Response
```bash
curl -I https://pepedhub.com
# Should return: 200 OK (after DNS propagates)
```

---

## Troubleshooting

### Site Not Loading
1. **Check DNS propagation:**
   - Visit: https://dnschecker.org/#A/pepedhub.com
   - Verify A record shows 75.2.60.5 globally

2. **Check Netlify status:**
   - Login to Netlify dashboard
   - Verify custom domain is added
   - Check "Awaiting DNS propagation" status

3. **Clear browser cache:**
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
   - Or use incognito/private browsing mode

### SSL Certificate Not Working
1. **Wait for DNS propagation:**
   - SSL cert won't provision until DNS fully propagates
   - Can take 30-60 minutes after DNS is configured

2. **Verify in Netlify:**
   - Go to: Domain settings → HTTPS
   - Should show "Provisioning certificate" or "Certificate active"

3. **Manual renewal (if needed):**
   - In Netlify HTTPS settings
   - Click "Verify DNS configuration"
   - Click "Renew certificate"

### Wrong Site Showing
1. **Check you're visiting the correct URL:**
   - https://pepedhub.com (correct)
   - Not: http://pepedhub.com (will redirect)

2. **Clear DNS cache:**
   ```bash
   # Windows
   ipconfig /flushdns
   
   # Mac
   sudo dscacheutil -flushcache
   
   # Linux
   sudo systemd-resolve --flush-caches
   ```

---

## Changing DNS in the Future

### To Update A Record (if Netlify IP changes):
1. Log into GoDaddy: https://dcc.godaddy.com/domains
2. Click pepedhub.com → Manage DNS
3. Find A record with Name "@"
4. Click edit (pencil icon)
5. Change Value to new IP
6. Click Save
7. Wait 1-24 hours for propagation

### To Update CNAME Record:
1. Same process as above
2. Find CNAME record with Name "www"
3. Edit Value to new Netlify subdomain
4. Save and wait for propagation

### To Move to Different Host:
1. Get new host's IP address or CNAME
2. Update A record to point to new IP
3. Update CNAME to point to new host
4. Wait for DNS propagation
5. Configure SSL at new host

---

## Backup DNS Configuration

**Save this information** in case you need to recreate DNS settings:

```
Domain: pepedhub.com
Registrar: GoDaddy
Nameservers: ns43.domaincontrol.com, ns44.domaincontrol.com

A Record:
  @ → 75.2.60.5

CNAME Records:
  www → drspeptides-education.netlify.app
  _domainconnect → _domainconnect.gd.domaincontrol.com

TXT Record:
  _dmarc → v=DMARC1; p=quarantine; adkim=r; aspf=r; rua=mailto:dmarc_rua@onsecureserver.net;
```

---

## Contact Information

### GoDaddy Support
- **DNS Help:** https://www.godaddy.com/help/manage-dns-680
- **Phone:** 1-480-505-8877
- **Login:** https://account.godaddy.com

### Netlify Support
- **Docs:** https://docs.netlify.com/domains-https/custom-domains/
- **Community:** https://answers.netlify.com
- **Support:** https://www.netlify.com/support/

---

**Last Updated:** December 4, 2025  
**Configuration Status:** ✅ Active and Propagating
